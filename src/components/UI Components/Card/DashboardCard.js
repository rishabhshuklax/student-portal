import React, { Component } from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";

import Classes from "./Card.module.css";

const { Meta } = Card;

class DashboardCard extends Component {
  render() {
    return (
      <Link to={this.props.link}>
        <Card
          hoverable
          className={Classes.card}
          cover={
            <img
              alt="example"
              src={this.props.imageURL}
              style={{ height: 250 }}
            />
          }
          actions={
            [
              //   <Icon type="setting" />,
              //   <Icon type="edit" />,
              //   <Icon type="ellipsis" />
            ]
          }
        >
          <Meta title={this.props.title} />
        </Card>
      </Link>
    );
  }
}

export default DashboardCard;
