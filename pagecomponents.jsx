import React, { Component } from 'react';
import Arunapage from './arunaPage';
class PageComponents
 extends Component {
    state = {perpage:5,
       students:[
      {
        "id":100,
    "name":"aruna",
    "college":"AMSSOI",
    "marks":50,
    },
{
  "id":101,
            "name":"sandhya",
            "college":"AMSSOI",
            "marks":80,
            
},
{
  "id":103,
                "name":"priya",
                "college":"AMSSOI",
                "marks":70,

},
{
  "id":104,
  "name":"prakash",
  "college":"AMSSOI",
  "marks":90,

},
{
  "id":105,
  "name":"raj",
  "college":"AMSSOI",
  "marks":60,

},
{
  "id":100,
  "name":"aruna",
  "college":"AMSSOI",
  "marks":50,
 
},
{
  "id":100,
  "name":"aruna",
  "college":"AMSSOI",
  "marks":50,

},
{
  "id":100,
  "name":"aruna",
  "college":"AMSSOI",
  "marks":50,

},
{
  "id":100,
  "name":"aruna",
  "college":"AMSSOI",
  "marks":50,

},
{
  "id":110,
  "name":"aruna",
  "college":"AMSSOI",
  "marks":50,
}
  ]} 
 render() { 
        return (
            <div>
                <table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">name</th>
      <th scope="col">college</th>
      <th scope="col">marks</th>
    </tr>
  </thead>
  <tbody>
    {this.state.students.map(
      stu =><tr>
      <th scope="row">{stu.id}</th>
      <td>{stu.name}</td>
      <td>{stu.college}</td>
      <td>{stu.marks}</td>
    </tr>
    )}
  </tbody>
</table>
<Arunapage totalrecords={this.state.students.length} perpage={this.state.perpage}/>
            </div>
        );
    }
}
 
export default PageComponents
;