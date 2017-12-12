function studentsController(){
	var dataCont = new dataController();
	var createBut = document.getElementById('createBut');
	var deleteBut = document.getElementById('deleteBut');

	createBut.addEventListener("click", createStudent, false);
	deleteBut.addEventListener("click", deleteList, false);

	//public function

	this.loadStudents = function(){
		var students = dataCont.getAllStudents();
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

	//private function
	
	function deleteList(){
		window.localStorage.clear();
		window.location = window.location;
	}
	
	function createStudent(){
		window.location = "studentdetails.html?";
	}

}
