var Student = function(){
	this.id = "";
	this.firstName = "";
	this.lastName = "";
	this.age = "";
	this.gender = "";
	this.course = "";
	this.department = "";
	this.address = "";
	this.phoneNumber = "";
	this.email = "";
	this.averageMark = "";
}


function dataController(){
	var students = new Array();
	var storageKey = "Students";

	this.getAllStudents = function(){
	
		var strStudents = getStorage(storageKey);
		if(strStudents != null){
			students = JSON.parse(strStudents);
		}
		else{

			// var st1 = new Student();
			// st1.firstName = "Bob";
			// st1.lastName = 'Grey';
			// st1.age = 19;
			// st1.gender = 'Male';
			// st1.course = 2;
			// st1.department = 'Sociology';
			// st1.address = 'Pushkin street';
			// st1.phoneNumber = 0777147845;
			// st1.email = 'bobgrey@gmail.com';
			// st1.averageMark = 13;
			// st1.id = 1;
			// students.push(st1);

			// var st2 = new Student();
			// st2.firstName = "John";
			// st2.lastName = 'Doe';
			// st2.age = 20;
			// st2.gender = 'Male';
			// st2.course = 4;
			// st2.department = 'Politics and International Studies';
			// st2.address = 'Tigran Mets street';
			// st2.phoneNumber = 05574842254;
			// st2.email = 'jondoe20@gmail.com';
			// st2.averageMark = 15;
			// st2.id = 2;
			// students.push(st2);

			// var st3 = new Student();
			// st3.firstName = 'Ann';
			// st3.lastName = 'Doe';
			// st3.age = 18;
			// st3.gender = 'Female';
			// st3.course = 3;
			// st3.department = 'Archaeology';
			// st3.address = 'Arami street';
			// st3.phoneNumber = 045715225;
			// st3.email = 'anndoe20@gmail.com';
			// st3.averageMark = 18;
			// st3.id = 3;
			// students.push(st3);

			// var st4 = new Student();
			// st4.firstName = 'Jack';
			// st4.lastName = 'Chan';
			// st4.age = 30;
			// st4.gender = 'Male';
			// st4.course = 3;
			// st4.department = 'History of Art';
			// st4.address = 'Some street';
			// st4.phoneNumber = 014487415;
			// st4.email = 'jackichan29@gmail.com';
			// st4.averageMark = 12;
			// st4.id = 4;
			// students.push(st4);

			// var st5 = new Student();
			// st5.firstName = 'Jane';
			// st5.lastName = 'Steem';
			// st5.age = 25;
			// st5.gender = 'Female';
			// st5.course = 4;
			// st5.department = ' Architecture';
			// st5.address = 'Saryan street';
			// st5.phoneNumber = 0415481215;
			// st5.email = 'janesteem@gmail.com';
			// st5.averageMark = 14;
			// st5.id = 5;
			// students.push(st5);
			
			
			// setStorage(storageKey,JSON.stringify(students));
		}

		return students;
		
	}

	
	this.getStudent = function(id){
		if (students == null || students.length == 0) {
			students = this.getAllStudents();
		}

		for (var i = 0; i < students.length; i++){
			if (students[i].id==id) {
				return students[i];
			}
		}
		return null;
	}

	this.saveStudent = function(student){
		var std = this.getStudent(student.id);
		std = student;
		setStorage(storageKey,JSON.stringify(students));
	}

	//private function

	function setStorage(cname, cvalue) {
    	window.localStorage.setItem(cname,cvalue);
	}


	function getStorage(cname) {
		return	window.localStorage.getItem(cname);
	}

}