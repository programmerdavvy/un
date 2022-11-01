import React from 'react'
import { CardBody, Card } from 'reactstrap'

function CaseAnalysis(props) {
    return (
        <React.Fragment>

            {props.caseAnalysis?.map((e, i) => {
                return (
                    <Card className='w-50 mb-2' key={i}>
                        <CardBody>
                            <div className=''>
                                <i className={e.icon + " me-1 fs-1 "}></i>
                            </div>
                            <div className=''>
                                <h2 style={{ fontWeight: '700' }}>{e.name}</h2>
                            </div>
                            <div className=''>
                                <span className="text-muted" style={{ fontWeight: '700' }}>Cases Reported</span>
                                <p className='text-danger' style={{ fontWeight: '700' }}> {e.casereported} cases in total</p>
                            </div>
                        </CardBody>
                    </Card>
                )
            })}
        </React.Fragment>
    )
}

export default CaseAnalysis