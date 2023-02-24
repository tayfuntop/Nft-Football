import React from "react";
import { Modal } from 'antd';
import { connect } from "react-redux";

import { Button, ProgressBar } from "../index";
import { closePlayerDetailsModal } from "../../redux/actions";

import "./index.css"
import "../../configs/fonts/Text.css";

const mapDispatchToProps = (dispatch) => ({ dispatch });
const mapStatetoProps = states => {
    return {
        playerDetailsModal: states.modalReducer.playerDetailsModal,
    };
};

const PlayerDetail = connect(
    mapStatetoProps,
    mapDispatchToProps
)(
    props => {

        const { playerDetails, dispatch, tradeType, playerDetailsModal, canTradeCard } = props;

        return (
            <Modal
                zIndex={3}
                centered
                maskStyle={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
                footer={null}
                width={914}
                open={playerDetailsModal}
            >
                {
                    playerDetailsModal &&
                    <div
                        className="player-details">
                        <div className={`player-details-header 
                ${playerDetails.cardType === "Bronze" && "bronze"}
                ${playerDetails.cardType === "Silver" && "silver"}
                ${playerDetails.cardType === "Gold" && "gold"}`}>
                            <img className="player-img" src={playerDetails.photoUrl} alt="" />
                            <div className="player-details-header-button">
                                <Button onClick={() => dispatch(closePlayerDetailsModal())} buttonType={"exit-button"} />
                            </div>
                        </div>
                        <div className="player-details-container">
                            <div className="player-details-top-content">
                                <div className="player-details-top-content-left">
                                    <span className="player-detailts-content-left-name title3">{playerDetails.name}</span>
                                    <span className="player-detailts-content-left-position large-normal-regular">{playerDetails.position}</span>
                                </div>
                                <div className="player-details-top-content-right">
                                    <span className="title3">{`€ ${playerDetails.price}.00`}</span>
                                    <Button
                                        buttonName={tradeType}
                                        onClick={() => canTradeCard(playerDetails.id)} buttonType={"fill-button"} />
                                </div>
                            </div>
                            <div className="player-details-content">
                                <span className="large-normal-bold">ATTRIBUTES</span>
                                <ul className="player-details-content-list">
                                    {
                                        playerDetails === undefined ? null :
                                            Object.keys(playerDetails.attributes).map((item, index) => {
                                                return (
                                                    <li className="player-details-content-list-item" key={index}>
                                                        <span className="large-normal-regular">{item[0].toLocaleUpperCase() + item.slice(1)}</span>
                                                        <div style={{ width: "100%" }}>
                                                            <ProgressBar percent={playerDetails.attributes[item]} />
                                                        </div>
                                                        <span>
                                                            <span className="title3">{playerDetails.attributes[item]}</span>
                                                            <span className="large-normal-regular attributes-percent">/100</span>
                                                        </span>
                                                    </li>
                                                )
                                            })
                                    }
                                </ul>
                            </div>
                            <div className="player-details-footer">
                                <div className="player-details-footer-content">
                                    <span className="large-normal-regular">Team</span>
                                    <span className="title3">{playerDetails.team}</span>
                                </div>
                                <div className="player-details-footer-content">
                                    <span className="large-normal-regular">Card Type</span>
                                    <span className="title3">{playerDetails.cardType}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </Modal>
        );
    });

export { PlayerDetail };