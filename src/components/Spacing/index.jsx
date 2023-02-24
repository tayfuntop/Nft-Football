import React from "react";

const Spacing = props => {

    const { spacing } = props;

    return (
        <>
            <div style={{ padding: `${!spacing ? "10" : props.spacing}px` }}></div>
        </>
    );
};

export { Spacing };