function studentsController(){
	var dataCont = new dataController();
	var createBut = document.getElementById('createBut');
	var deleteBut = document.getElementById('deleteBut');

	createBut.addEventListener("click", createStudent, false);
	deleteBut.addEventListener("click", deleteList, false);

	var university = angular.module('university', [ ]);

	university.controller('StudentsController', function($scope){
		this.studentList = dataCont.getAllStudents();

		$scope.sortType = 'firstName';
		$scope.sortReverse  = false;
		$scope.searchStudent   = '';
	});

//private function
	function deleteList(){
		var answer = confirm("Are you sure?")
		if(answer) {
			window.localStorage.clear();
			window.location = window.location;
		}
		else{
 			return;
		}
	}
	
	function createStudent(){
		window.location = "studentdetails.html?";
	}

}
