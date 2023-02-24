import React from "react";
import "./index.css";
import { Button } from "../index";
import { Modal } from 'antd';
import { connect } from "react-redux";
import { closeTradeModal } from "../../redux/actions";

const mapDispatchToProps = (dispatch) => ({ dispatch });
const mapStatetoProps = states => {
    return {
        tradeModal: states.modalReducer.tradeModal,
    }
}

const TradeModal = connect(
    mapStatetoProps,
    mapDispatchToProps
)(
    props => {

        const { playerPrice, dispatch, tradeModal, cardTradeFunction, tradeType, cardId } = props;

        return (
            <Modal
                centered
                zIndex={4}
                maskStyle={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
                footer={null}
                width={399}
                open={tradeModal}
            >
                <div className="trade-modal">
                    <span className="title3">Would you like to {tradeType} the card for
                        <br /><span className="price">€ ${playerPrice}.00</span></span>
                    <Button onClick={() => cardTradeFunction(cardId)} buttonType="fill-button" buttonName={tradeType} />
                    <div className="container-button">
                        <Button onClick={() => dispatch(closeTradeModal())} buttonType="empty-button" buttonName="Cancel" />
                    </div>
                </div>
            </Modal>
        );
    });

export { TradeModal };