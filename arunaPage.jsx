import React, { Component } from 'react';
import _ from 'lodash';
class Arunapage extends Component {
    state = {

    }
    render() {
        const allrecords=this.props.totalrecords;
        const recordperpage=this.props.perpage;
        const pageindex=allrecords/recordperpage;
      const arunapages= _.range(1,pageindex+1);
        return (
         <nav aria-label="Page navigation example">
  <ul className="pagination">
    {arunapages.map(
        page => <li className="page-item"><a className="page-link">{page}</a></li>
    )}
    
  </ul>
</nav>
        );
    }
}
 
export default Arunapage;