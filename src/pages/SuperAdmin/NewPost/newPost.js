import React, { useCallback, useEffect, useState } from 'react'
import { Card, CardBody, Col, Row, FormFeedback, Form, Input, Label, Button, FormGroup } from 'reactstrap'
import * as Yup from "yup";
import { useFormik } from "formik";
import Dropzone from "react-dropzone"
import { Link, withRouter } from 'react-router-dom'
import { Editor } from "react-draft-wysiwyg"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
import { EditorState, convertFromRaw, convertToRaw } from "draft-js";
// import { selectThemeColors } from '@utils'
import makeAnimated from 'react-select/animated'

import { httpRequest, request } from '../../../services/utilities';
import { USER_COOKIE } from '../../../services/constants';
import SSRStorage from '../../../services/storage';
import { useDispatch, useSelector } from 'react-redux';
import { updateLoader } from '../../../store/actions';
import axios from 'axios'
import CreatableSelect from 'react-select/creatable'
import { Spinner } from "reactstrap";

const storage = new SSRStorage();
const animatedComponents = makeAnimated()


export const selectThemeColors = theme => ({
    ...theme,
    colors: {
        primary25: '#7367f01a', // for option hover bg-color
        primary: '#7367f0', // for selected option bg-color
        neutral10: '#7367f0', // for tags bg-color
        neutral20: '#ededed', // for input border-color
        neutral30: '#ededed' // for input hover border-color
    }
})

const NewPost = (props) => {
    const {
        match: { params },
    } = props;
    const { loader } = useSelector((state) => ({
        loader: state.visibility.show
    }));
    const dispatch = useDispatch();

    const [selectedFiles, setselectedFiles] = useState([]);
    const [selectedDocuments, setselectedDocuments] = useState([]);
    const [isChecked, setIsChecked] = useState(false)
    const [selectedMulti, setselectedMulti] = useState(null)
    const [selectedTags, setSelectedTags] = useState([])
    const [selectedImages, setSelectedImages] = useState([])

    const [tags, setTags] = useState('');
    const [description, setDescription] = useState('');
    const [post, setPost] = useState(null);
    const [selectedCategory, setselectedCategory] = useState(null);
    const [title, setTitle] = useState('');
    const [allFiles, setAllFiles] = useState([])
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty(),)
    const [convertedContent, setConvertedContent] = useState(null);

    const onEditorStateChange = (editorState) => {
        setEditorState(editorState);
    }

    const uploadedFiles = () => {
        if (!(selectedFiles?.length >= 1) && !(allFiles?.length >= 1)) {
            return props.showToast('error', 'Kindly attach a media file or document');

        }
        dispatch(updateLoader(''));

        let count = 0;
        // const filteredD = selectedFiles.filter(i => !i.id)
        // const files_ = selectedFiles.length > 1 ? filteredD : selectedFiles;
        const files_ = selectedFiles;
        console.log(files_, selectedFiles)
        if (selectedFiles?.length >= 1) {
            const formData = new FormData();
            for (let i = 0; i < files_.length; i++) {
                let file = files_[i];
                formData.append("file", file);
                formData.append("upload_preset", "geekyimages");
                fetch(`https://api.cloudinary.com/v1_1/doxlmaiuh/image/upload`, {
                    method: "POST",
                    body: formData
                })
                    .then((response) => {
                        return response.json();
                    })
                    .then((data) => {
                        console.log(data);
                        let dataFile = {
                            name: data.original_filename, link: data.secure_url, type: data.format === 'png' || data.format === 'jpeg' ?
                                'image' : data.format === 'mp4' ? 'video' : data.format === 'mp3' ? 'audio' : data.format === 'pdf' ? 'pdf' : ''
                        };
                        if (dataFile?.name !== null) {
                            allFiles.push(dataFile);
                        }
                        count++
                        if (count === files_.length) {
                            savePost();
                            dispatch(updateLoader('none'));

                        }
                    });

            }
        } else {
            savePost();
        }

    }


    const uploadCallback = (file) => {
        return new Promise((resolve, reject) => {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", "geekyimages");
            axios.post(`https://api.cloudinary.com/v1_1/doxlmaiuh/image/upload`, formData).then(responseImage => {
                console.log(responseImage)
                resolve({ data: { link: responseImage.data.secure_url } });
            })
        });
    }

    function formatBytes(bytes, decimals = 2) {
        if (bytes === 0) return "0 Bytes"
        const k = 1024
        const dm = decimals < 0 ? 0 : decimals
        const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]

        const i = Math.floor(Math.log(bytes) / Math.log(k))
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
    }
    function handleMulti(selectedMulti) {
        selectedMulti.forEach(e => {
            let item = selectedTags.find(x => x === e.value);
            if (item === undefined) {
                selectedTags.push(e.value);
                console.log('admin');
            }
        })

    }
    const fetchPostById = useCallback(async () => {
        dispatch(updateLoader(''));
        try {
            let url = `sections/admin?pageId=&id=${params?.id}`;
            const rs = await request(url, 'GET', true);
            // console.log(rs);
            if (rs.success === true) {
                setPost(rs.result);
                setDescription(rs.result?.content);
                setTags(rs.result.tags);
                let comingTags = rs.result.tags.split(',');
                comingTags.forEach(e => {
                    let x = { label: e, value: e }
                    selectedTags.push(x)
                })
                setselectedCategory(rs.result?.pageId);
                setTitle(rs.result?.title);
                setEditorState(EditorState.createWithContent(convertFromRaw(JSON.parse(rs.result?.content))))
                setAllFiles(rs.result?.media);
                let images = rs.result?.media.filter(e => e.type === 'image');
                let documents = rs.result?.media.filter(e => e.type === 'pdf');
                setSelectedImages(images);
                setselectedDocuments(documents);
                dispatch(updateLoader('none'));
            }
        } catch (err) {
            dispatch(updateLoader('none'));
            console.log(err);
        }
    }, [params?.id]);

    const validation = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            title
        },
        validationSchema: Yup.object({
            title: Yup.string().required("Please Enter Title")
        }),
        onSubmit: e => uploadedFiles(e)
    });
    const savePost = async e => {
        dispatch(updateLoader(''));

        const user = await storage.getItem(USER_COOKIE);
        const contentState = editorState.getCurrentContent();
        let data = {
            pageId: selectedCategory, title, content: JSON.stringify(convertToRaw(contentState)), tags,
            media: allFiles, language: 'english', date: new Date(),
            // categoryId: selectedCategory
            userId: user.payload.id
        }
        console.log(data)
        let url = params?.id == undefined || params?.id == null ? `sections` : `sections?id=${params.id}`
        try {
            const rs = await request(url, params?.id === undefined || params?.id === null ? 'POST' : 'PATCH', true, data);
            // if (params?.id !== null && params?.id !== undefined) {
            //     const rs_up = await request(`media?type=section&id=${params?.id}`, 'POST', true, allFiles);
            //     console.log(rs_up)
            // }

            console.log(rs)
            if (rs.success === true) {
                dispatch(updateLoader('none'));
                props.showToast('success', params?.id === undefined || params?.id === null ? 'Saved Successfully' : 'Updated Successfully');
            }
        } catch (err) {
            dispatch(updateLoader('none'));
            console.log(err);
            props.showToast('error', 'Failed to save')
        }
    }
    const tagOption = [
        { label: "UN", value: "UN" },
        { label: "NEWS", value: "NEWS" },
        { label: "NIGERIA", value: "NIGERIA" },
        { label: "PEACE", value: "PEACE" },
        { label: "SECURITY", value: "SECURITY" },
        { label: "HUMANITARIAN ADIF", value: "HUMANITARIAN AID" },
        { label: "SDGs", value: "SDGs" }
    ]

    const onChangeDocument = e => {
        let x = [...selectedFiles, ...e]
        let z = [...selectedDocuments, ...e]
        setselectedDocuments(z);
        setselectedFiles(e);
        console.log(selectedFiles)
    }
    const onChangeImage = e => {
        let x = [...selectedFiles, ...e]
        let z = [...selectedImages, ...e]
        setSelectedImages(z);
        setselectedFiles(x);
    }
    useEffect(() => {
        if (params?.id !== null && params?.id !== undefined) {
            fetchPostById();
        }
    }, [fetchPostById]);


    return (
        <React.Fragment>
            <Card>
                <CardBody>
                    <Row>
                        <Col>
                            {/* <Card>
                                <CardBody> */}
                            <h4 className="card-title" >{params.id ? 'Edit' : 'Create a New'} Post</h4>

                            <Form className="needs-validation"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    validation.handleSubmit();
                                    return false;
                                }}>

                                <Row>
                                    <Col>
                                        <FormGroup className="mb-3">
                                            <Label htmlFor="validationCustom01">Title</Label>
                                            <Input
                                                name="title"
                                                placeholder="Title"
                                                type="text"
                                                className="form-control"
                                                id="validationCustom01"
                                                onChange={e => setTitle(e.target.value)}
                                                onBlur={validation.handleBlur}
                                                value={validation.values.title || ""}
                                                invalid={
                                                    validation.touched.title && validation.errors.title ? true : false
                                                }
                                            />
                                            {validation.touched.title && validation.errors.title ? (
                                                <FormFeedback type="invalid">{validation.errors.title}</FormFeedback>
                                            ) : null}
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <FormGroup>
                                            <div className="mb-3" style={{ outline: 'none' }}>
                                                <label htmlFor="floatingSelectGrid" className='form-label'>
                                                    Tags
                                                </label>
                                                <CreatableSelect
                                                    isClearable={false}
                                                    theme={'#eee'}
                                                    closeMenuOnSelect={false}
                                                    components={animatedComponents}
                                                    defaultValue={selectedTags ? selectedTags : [tagOption[0]]}
                                                    isMulti

                                                    options={tagOption}
                                                    className='react-select'
                                                    classNamePrefix='tags'
                                                    onChange={(e) => {
                                                        handleMulti(e)
                                                    }}
                                                />
                                            </div>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>

                                    <Col xl={12} className='d-flex'>
                                        <div>Categories:</div>
                                        {props.categories?.map(e => {
                                            return (
                                                <FormGroup className="mb-3 mx-2" key={e.id}>
                                                    <div className="form-check">
                                                        <Input
                                                            type="checkbox"
                                                            className="form-check-input"
                                                            id={`invalidCheck${e.id}`}
                                                            // checked={selectedCategory === e.id ? true : false}
                                                            // checked={selectedCategory === e.id ? true : isChecked}
                                                            onClick={() => {
                                                                // setIsChecked(!isChecked)
                                                                let id = document.getElementById(`invalidCheck${e.id}`);
                                                                if (id.checked === true) {
                                                                    setselectedCategory(e.id);
                                                                } else {
                                                                    setselectedCategory(null);
                                                                    setIsChecked(false)


                                                                }
                                                            }}
                                                        />
                                                        <Label
                                                            className="form-check-label text-lowercase"
                                                            htmlFor={`invalidCheck${e.id}`}
                                                        >
                                                            {" "}
                                                            {e.name}
                                                        </Label>
                                                    </div>
                                                </FormGroup>
                                            )
                                        })}

                                    </Col>

                                </Row>
                                <Row>
                                    <Col>
                                        <FormGroup className="mb-3">
                                            <Label htmlFor="validationCustom02">Paragraph</Label>
                                            <Editor
                                                editorState={editorState}
                                                onEditorStateChange={onEditorStateChange}
                                                toolbarClassName="toolbarClassName"
                                                wrapperClassName="wrapperClassName"
                                                editorClassName="editorClassName"
                                                // readOnly
                                                toolbar={{
                                                    // inline: { inDropdown: true },
                                                    // list: { inDropdown: true },
                                                    // textAlign: { inDropdown: true },
                                                    // link: { inDropdown: true },
                                                    // history: { inDropdown: true },
                                                    image: {
                                                        uploadEnabled: true,
                                                        uploadCallback: uploadCallback,
                                                        previewImage: true,
                                                        inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
                                                        alt: { present: false, mandatory: false },
                                                        defaultSize: {
                                                            height: 'auto',
                                                            width: 'auto',
                                                        },
                                                    },
                                                }}
                                            // toolbar={{
                                            //     inline: { inDropdown: true },
                                            //     list: { inDropdown: true },
                                            //     textAlign: { inDropdown: true },
                                            //     link: { inDropdown: true },
                                            //     history: { inDropdown: true },
                                            //     image: {
                                            //         uploadCallback: uploadImageCallBack,
                                            //         alt: { present: false, mandatory: false },
                                            //     },
                                            // }}
                                            />
                                            {/* <Editor
                                                toolbarClassName="toolbarClassName"
                                                wrapperClassName="wrapperClassName"
                                                editorClassName="editorClassName"
                                                // contentState={}
                                                name='description'
                                                onChange={e => setDescription(e.blocks[0].text)}

                                            /> */}

                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>

                                    <Col>
                                        <Label>Add Documents</Label>
                                        <Input type='file' accept="pdf/*" onChange={e => onChangeDocument(e.target.files)} multiple />
                                        <div>
                                            {selectedDocuments?.map(e => {
                                                return (
                                                    <span height="80" key={e.id}
                                                        className="avatar-sm rounded bg-light mt-2 mx-2" alt='document' >
                                                        <i className='uil-file-alt' /> {e.name}
                                                    </span>
                                                )
                                            })}
                                        </div>
                                    </Col>
                                    <Col>
                                        <Label>Add Feature Image</Label>
                                        <Input type='file' onChange={e => onChangeImage(e.target.files)} accept="image/*" multiple />
                                        <div>
                                            {selectedImages?.map(e => {
                                                return (
                                                    <img src={e.size === undefined ? e.link : URL.createObjectURL(e)} height="80" key={e.name}
                                                        className="avatar-sm rounded bg-light mt-2 mx-2" alt='feature' />

                                                )
                                            })}
                                        </div>
                                    </Col>
                                </Row>

                                <div className='d-flex justify-content-between mt-3'>
                                    <Row>
                                        <Col lg="12">
                                            {/* <FormGroup className="mb-3">
                                                <div className="form-check">
                                                    <Input
                                                        type="checkbox"
                                                        className="form-check-input"
                                                        id="invalidCheck"
                                                    />
                                                    <Label
                                                        className="form-check-label"
                                                        htmlFor="invalidCheck"
                                                    >
                                                        {" "}
                                                        Allow Comments
                                                    </Label>
                                                </div>
                                            </FormGroup> */}
                                        </Col>
                                    </Row>
                                    <div>
                                        <Button color="primary" type="submit">
                                            {params?.id === null || params?.id === undefined ? 'Publish' : 'Update'}
                                        </Button>
                                        <Spinner className="fs-5 float-end mx-2" style={{ display: loader }} color="primary" />

                                    </div>
                                </div>
                            </Form>

                        </Col>
                    </Row>
                </CardBody>
            </Card>

        </React.Fragment>
    )
}

export default withRouter(NewPost) 