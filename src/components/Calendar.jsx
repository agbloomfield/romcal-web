import React, {Component} from 'react';
import $ from 'jquery';
import moment from 'moment';
import fullCalendar from 'fullcalendar';
import _ from 'lodash';

export class Calendar extends Component {
	 
  constructor(props) {
    super(props);
    _.bindAll(this, ['dayClick']);
  }

  dayClick() {
    console.log('day clicked', arguments);
  }

  componentDidMount() {
    this.$el = $(this.el);
    this.$el.fullCalendar({
      dayClick: this.dayClick
    });
  }

  // Destroy calendar here
  componentWillUnmount() {

  }

  render() {
    return (
      <div className="col-xs-12">
	      <div ref={el => this.el = el }></div>
      </div>
    );
	}
}
