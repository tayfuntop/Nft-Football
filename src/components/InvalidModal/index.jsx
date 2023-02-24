import React from "react";
import { Modal } from 'antd';
import { connect } from "react-redux";

import { closeNotEnoughtMoneyModal } from "../../redux/actions";
import { Button } from "../index";

import "./index.css";
import "../../configs/fonts/Text.css"

const mapDispatchToProps = (dispatch) => ({ dispatch });
const mapStatetoProps = states => {
    return {
        notEnoughtMoneyModal: states.modalReducer.notEnoughtMoneyModal,
    };
};

const InvalidModal = connect(
    mapStatetoProps,
    mapDispatchToProps
)(
    props => {

        const { dispatch, notEnoughtMoneyModal } = props;
        
        return (
            <Modal
                centered
                maskStyle={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
                footer={null}
                width={399}
                open={notEnoughtMoneyModal}
            >
                <div className="invalid-modal">
                    <span className="title3 text">You don't have enough money</span>
                    <Button onClick={() => dispatch(closeNotEnoughtMoneyModal())} buttonType="fill-button" buttonName="Back" />
                </div>
            </Modal>
        );
    });

export { InvalidModal };