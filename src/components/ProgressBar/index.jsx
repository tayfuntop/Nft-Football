import React from "react";
import { Progress } from 'antd';

const ProgressBar = props => {

    const { percent } = props;

    return (
        <div>
            <Progress
                trailColor="#E3E5E5"
                strokeColor="#E8282B"
                strokeWidth={4}
                percent={percent} showInfo={false} />
        </div>
    );
};

export { ProgressBar };