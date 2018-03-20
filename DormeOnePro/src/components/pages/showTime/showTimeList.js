import React,{Component} from 'react'
import {View, StyleSheet, Text, Image, ListView} from 'react-native'
import ShowTimeCell from './showTimeCell'
import {commonStyles} from '../../../utils/commonStyles'
class ShowTimeList extends Component {
    constructor(props) {
        super(props)
        this.renderRow = this.renderRow.bind(this)
        this.state = {
            dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        }
    }

    renderRow(rowData, sectionId, rowId) {
        return (
            <ShowTimeCell key={rowId} rowData={rowData}/>
        )
    }

    render() {
        let dataSource = this.state.dataSource.cloneWithRows(this.props.dataArr)
        return (
            <ListView
                style={styles.content}
                renderRow={this.renderRow}
                enableEmptySections
                dataSource={dataSource}
            />
        )
    }
}

const styles = StyleSheet.create({

})
export default ShowTimeList