function studentDetailsController(){
	var dataCont = new dataController();

//constructor
	var editBut = document.getElementById('editBut'),
		cancelBut = document.getElementById('cancelBut'),
	 	saveBut = document.getElementById('saveBut'),
	 	backBut = document.getElementById('backBut');

	editBut.addEventListener("click", editButFunc, false);
	saveBut.addEventListener('click',saveButFunc,false);
	cancelBut.addEventListener('click',cancelButFunc,false);
	backBut.addEventListener('click',backButFunc,false);

	var id = getIdFromQuerySring();
	var student = dataCont.getStudent(id);
	
	if (student == null) {
		student = new Student();
	}

//private functions

	function getIdFromQuerySring(){
		var key = 'id=';	
 		var qsIndex = window.location.search.indexOf(key); 
		var qsSub = window.location.search.substring(qsIndex);
		var amp = qsSub.indexOf('&');
		amp = amp == -1?qsSub.length:amp; 
		var id = qsSub.substring(key.length,amp);
		return id;
	}

	 
	function drawStudentInfo(key,value){
			var detailsTable = document.getElementById('detailsTable');
			var d = document,
			tr = d.createElement('tr'),
			tdKey = d.createElement('td'),
		 	tdValue = d.createElement('td'),
		 	tdInputField = d.createElement('input');
		 	
 			tdKey.innerHTML = key;
		
 			tdInputField.setAttribute('type','text');
		 	tdInputField.readOnly = true;
		 	tdInputField.value = value;
		 	tdInputField.setAttribute('name',key);	
		 	
		 	tr.appendChild(tdKey);
		 	tr.appendChild(tdValue);
		 	tdValue.appendChild(tdInputField);

		 	detailsTable.appendChild(tr);	

	}

	function setReadOnly(isReadOnly){													
		var selector = document.querySelectorAll("input[type='text']");
		for (var i = 0; i < selector.length;i++) {
			selector[i].readOnly = isReadOnly;
			selector[i].style.backgroundColor = "#f2f2f2";
		}
	}


	function editButFunc() {															//edit student's information
		setReadOnly(false);
 		editBut.style.visibility = "hidden";
 		cancelBut.style.visibility = "visible";
 		saveBut.style.visibility = "visible";	
	}

	function saveButFunc(){																//save information in new version
		setReadOnly(true);

		var queryString = "";

		if (!id) {
			student.id = studList.length + 1;
			studList.push(student);
			queryString = "?id=" + student.id;
		}

		student.firstName = document.querySelector("input[name='First Name']").value;
		student.lastName = document.querySelector("input[name='Last Name']").value;
		student.age =document.querySelector("input[name='Age']").value;
		student.gender = document.querySelector("input[name='Gender']").value;
		student.course = document.querySelector("input[name='Course']").value;
		student.department = document.querySelector("input[name='Department']").value;
		student.address = document.querySelector("input[name='Address']").value;
		student.email = document.querySelector("input[name='Email']").value;
		student.averageMark = document.querySelector("input[name='Average Mark']").value;
		student.phoneNumber = document.querySelector("input[name='Phone Number']").value;


		dataCont.saveStudent(student);
		window.location = window.location + queryString; 
			
	}

	function cancelButFunc(){							 
		window.location = window.location;         			//refresh page
	}

	function backButFunc(){
		window.location = "students.html";
	}

//public functions

	this.loadUserDetailsInfo=function(){
		drawStudentInfo("First Name", student.firstName);
		console.log(student.firstName);
		drawStudentInfo("Last Name", student.lastName);
		drawStudentInfo("Gender", student.gender);
		drawStudentInfo("Age", student.age);
		drawStudentInfo("Course", student.course);
		drawStudentInfo("Address",student.address);
		drawStudentInfo("Department", student.department);
		drawStudentInfo("Average Mark", student.averageMark);
		drawStudentInfo("Phone Number", student.phoneNumber);
		drawStudentInfo("Email", student.email);

		if (!id) {
			editBut.click();
		}
		
	 }
}	