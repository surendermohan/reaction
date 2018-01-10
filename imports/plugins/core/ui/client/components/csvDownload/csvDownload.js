import React, { Component } from "react";
import PropTypes from "prop-types";
import { Components, registerComponent } from "@reactioncommerce/reaction-components";
import { CSVLink } from "react-csv";

/**
 * @file CSVDownalod React Component for downloading data in CSV Format
 *
 * @module CSVDownload
 * @extends Component
 */
class CSVDownload extends Component {
  /**
   * @name CSVDownload propTypes
   * @summary React component for downloading CSV file of provided data, a wrapper around `react-csv`
   * @param {object} props - React PropTypes
   * @property {object} data - Ann array containing data to download in CSV format
   * @property {string} filename - Name of the file that is downloaded
   * @return {node} React node containing component for downloading CSV file of provided data
   */
  static propTypes = {
    className: PropTypes.string,
    data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    filename: PropTypes.string,
    headers: PropTypes.array,
    i18nKeyLabel: PropTypes.string,
    label: PropTypes.string
  }

  render() {
    return (
      <div>
        <CSVLink
          className={this.props.className}
          data={this.props.data}
          filename={this.props.filename}
          headers={this.props.headers}
        >
          <Components.Translation defaultValue={this.props.label} i18nKey={this.props.i18nKeyLabel} />
        </CSVLink>
      </div>
    );
  }
}

registerComponent("CSVDownload", CSVDownload);

export default CSVDownload;