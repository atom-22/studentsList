
 	function loadNestedInfo() {
 		var key = 'id=';	
 		var qsIndex = window.location.search.indexOf(key); 
		var qsSub = window.location.search.substring(qsIndex);
		var amp = qsSub.indexOf('&');

		amp= amp == -1? qsSub.length: amp;

		var id = qsSub.substring(key.length,amp);
		var student = getStudent(id);


		drawStudentInfo("First Name", student.firstName);
		drawStudentInfo("Last Name", student.lastName);
		drawStudentInfo("Gender", student.gender);
		drawStudentInfo("Age", student.age);
		drawStudentInfo("Course", student.course);
		drawStudentInfo("Department", student.department);
		drawStudentInfo("Average Mark", student.averageMark);
		drawStudentInfo("Phone Number", student.phoneNumber);
		drawStudentInfo("Email", student.email);
		
	 }
	 
	function drawStudentInfo(key,value){
		var detailsTable = document.getElementById('detailsTable'),
			tr = document.createElement('tr'),
			tdKey = document.createElement('td'),
		 	tdValue = document.createElement('td'),
		 	tdInputField = document.createElement('input');
		 	
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
	}
}



var editBut = document.getElementById('editBut'),
	cancelBut = document.getElementById('cancelBut')
 	saveBut = document.getElementById('saveBut');

function editButFunc() {
			setReadOnly(false);
 			editBut.style.visibility = "hidden";
 			cancelBut.style.visibility = "visible";
 			saveBut.style.visibility = "visible";	
		}

function saveButFunc(){
		setReadOnly(true);

			
		}

function cancelButFunc(){
		window.location = window.location;        //refresh page	
		}

editBut.addEventListener("click", editButFunc, false);
saveBut.addEventListener('click',saveButFunc,false);
cancelBut.addEventListener('click',cancelButFunc,false);
	

	
