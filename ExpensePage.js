import React from 'react'
class ExpensePage extends React.Component {
 constructor(){
      super();
      this.state = {value: ''};
      this.handleKeyPress = this.handleKeyPress.bind(this)
      this.addNew = this.addNew.bind(this)
   }


handleKeyPress(e) {
 const re = /^[0-9\b]+$/;
      if (e.target.value === '' || re.test(e.target.value)) {
         this.setState({value: e.target.value})
      }
}

addNew(){
	var index = $("table tbody tr:last-child").index();
        index = index + 1;
        var row = '<tr>' +
         '<td><div id="' + "expId-" + index + '" class="form-group"><div class="input-group date" id="' + "edpicker-" + index + '"> <input type="text" class="form-control" id="' +"ed-" + index + '" name="' + "ed-" + index +'"/>'+
                    '<span class="input-group-addon">'+
                        '<span class="glyphicon glyphicon-calendar"></span>'+
                    '</span></div></div>'+
	'</td>' +
            '<td><div id="' + category-"  + index +  '"><select id="' +"category-" + index +  '" name="' + "category-" + index + '" class="form-control"  required>' +
             '<option value=""></option>'+
             '<option value="Food">Food</option>' +
            '<option value="Shopping">Shopping</option>' + 
            '<option value="Dinning">Dinning</option>' + 
            '<option value="Travel">Travel</option>' + 
            '<option value="Entertainment">Entertainment</option>' + 
            '<option value="Miscellaneous">Miscellaneous</option>' + 
            '</select></div></td>' + 
            '<td><div id="' + "amt-" + index + '"><input type="text" class="form-control" name="amount" id="amount"></div></td>' +
	'<td id="' + "actions-" +index + '">' + actions + '</td>' +
        '</tr>';
    	$("table").append(row);
           //
//console.log($("#actions-"+index+ " .add"));   
 			        $("#actions-"+index+ " .add").removeAttr("style");
                                         $("#actions-"+index+ " .add").attr("style","display:inline");
                                         $("#actions-"+index+ " .edit").removeAttr("style");
                                         $("#actions-"+index+ " .edit").attr("style","display:none"); 

               $('#edpicker-'+index).datetimepicker(
	        {
                     format: 'YYYY-MM-DD'
                    }

}


  render() {
    return (

<body>
      <div className="container-fluid">
	  <label className="control-label col-sm-1">Monthly Budget</label>
          <div className="col-md-4">
           <input type="text" className="form-control" name="mbudget" id="mbudget" value={this.state.value} onChange={this.handleKeyPress}/>
          </div>
          <div className="table-wrapper">
            <div className="table-title">
                <div className="row">
                    <div className="col-sm-8"><h2>Expense <b>Details</b></h2></div>
                    <div className="col-sm-4">
                        <button type="button" className="btn btn-info add-new" onClick={this.addNew}><i className="fa fa-plus"></i> Add New</button>
                    </div>
                </div>
            </div>
            <table className="table table-bordered" id="expenseTable">
                <thead>
                    <tr>
                       <th>Date of Expense</th>
                       <th>Category</th>
                       <th>Amount</th>
                       <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="hidden">
                        <td className="hidden"></td>
                        <td className="hidden"></td>
                        <td className="hidden"></td>
                        <td className="hidden">
		     <a className="add" title="Add" data-toggle="tooltip"><i className="material-icons">&#xE03B;</i></a>
                            <a className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons">&#xE254;</i></a>
                            <a className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons">&#xE872;</i></a>
                        </td>
                    </tr>
                 </tbody>
            </table>
         </div>
      </div>
</body>
    )
  }
}
export default ExpensePage
