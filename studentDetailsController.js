	var key = 'id=';	
 	var qsIndex = window.location.search.indexOf(key); 
	var qsSub = window.location.search.substring(qsIndex);
	var amp = qsSub.indexOf('&');
	amp = amp == -1?qsSub.length:amp;
	var id = qsSub.substring(key.length,amp);
	var student = getStudent(id);
	var detailsTable = document.getElementById('detailsTable');

	window.localStorage.setItem('First Name',student.firstName);
	var anun = window.localStorage.getItem('First Name');

 	function loadNestedInfo() {
		
		drawStudentInfo("First Name", anun);
		
		drawStudentInfo("Last Name", student.lastName);
		window.localStorage.setItem('Last Name',student.lastName);
		drawStudentInfo("Gender", student.gender);
		window.localStorage.setItem('Gender',student.gender);
		drawStudentInfo("Age", student.age);
		window.localStorage.setItem('Age',student.age);
		drawStudentInfo("Course", student.course);
		window.localStorage.setItem('Course',student.course);
		drawStudentInfo("Department", student.department);
		window.localStorage.setItem('Department',student.department);
		drawStudentInfo("Average Mark", student.averageMark);
		window.localStorage.setItem('Average Mark',student.averageMark);
		drawStudentInfo("Phone Number", student.phoneNumber);
		window.localStorage.setItem('Phone Number',student.phoneNumber);
		drawStudentInfo("Email", student.email);
		window.localStorage.setItem('Email',student.email);
	 }
	 
	function drawStudentInfo(key,value){
			var d = document,
			tr = d.createElement('tr'),
			tdKey = d.createElement('td'),
		 	tdValue = d.createElement('td'),
		 	tdInputField = d.createElement('input'),
		 	editBut = d.getElementById('editBut'),
			saveBut = d.getElementById('saveBut'),
			cancelBut = d.getElementById('cancelBut'),
 			cancelBut = d.getElementById('cancelBut'),
 			saveBut = d.getElementById('saveBut');
		
 			tdInputField.setAttribute('type','text');
		 	tdInputField.readOnly = true;
		 	tdKey.innerHTML = key;
		 
		 	tdInputField.value = value;	
		 	
		 	tr.appendChild(tdKey);
		 	tr.appendChild(tdValue);
		 	tdValue.appendChild(tdInputField);

		 	detailsTable.appendChild(tr);

		function editButFunc() {
 			editBut.style.visibility = "hidden";
 			cancelBut.style.visibility = "visible";
 			saveBut.style.visibility = "visible";
 			tdInputField.removeAttribute('readOnly');
		}

		function saveButFunc(){
			tdInputField.readOnly = true;
		}

		function cancelButFunc(){
			tdInputField.removeAttribute('readOnly');
		}

		editBut.addEventListener("click", editButFunc, false);
		saveBut.addEventListener('click',saveButFunc,false);
		cancelBut.addEventListener('click',cancelButFunc,false);

	}




	

	
