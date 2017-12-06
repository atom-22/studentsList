
function loadStudents(){
	var students = getAllStudents();
	for(var i=0;i<students.length;i++){
		drawStudent(students[i]);
	}

	function drawStudent(st){
		var d = document;
		var table = d.getElementById("studentsTable");
		var tr = d.createElement("tr");
		var tdName = d.createElement("td");
		var tdDepartment = d.createElement("td");
		var tdCourse = d.createElement("td");
		var anchor = d.createElement('a');

		anchor.setAttribute('href','studentdetails.html?id=' + st.id);
		anchor.setAttribute('target','_blank');

		anchor.innerHTML = st.firstName + ' ' + st.lastName;

		tdName.appendChild(anchor);
		tdDepartment.innerHTML = st.department;
		tdCourse.innerHTML = st.course;

		tr.appendChild(tdName);
		tr.appendChild(tdDepartment);
		tr.appendChild(tdCourse);

		table.appendChild(tr);
		
	}

}

















	// function loadNewStudents() {
	// 	drawNewStudent('firstName');
		
	// }

	// var createBut = document.getElementById('createBut');
	// var newd = document.getElementById('newd');

	// function drawNewStudent(key){

	// 	window.location = "studentdetails.html?id=6";

	// 	var d = document,
	// 		tr = d.createElement('tr'),
	// 		tdKey = d.createElement('td'),
	// 	 	tdValue = d.createElement('td'),
	// 	 	tdInputField = d.createElement('input'),
	// 	 	editBut = d.getElementById('editBut'),
	// 		saveBut = d.getElementById('saveBut'),
	// 		cancelBut = d.getElementById('cancelBut'),
 	// 		cancelBut = d.getElementById('cancelBut'),
 	// 		saveBut = d.getElementById('saveBut');

 	// 		tdInputField.setAttribute('type','text');
	// 	 	tdInputField.readOnly = true;
	// 	 	tdKey.innerHTML = key;
	 
	// 	 	tdInputField.value = '';	
		 	
	// 	 	tr.appendChild(tdKey);
	// 	 	tr.appendChild(tdValue);
	// 	 	tdValue.appendChild(tdInputField);

	// 	 	newd.appendChild(tr);

	// }

	// createBut.addEventListener('click',loadNewStudents,false);



