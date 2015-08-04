/// <reference path="../typings/jquery/jquery.d.ts"/>
/// <reference path="../typings/angularjs/angular.d.ts"/>
(function(){
	var app = angular.module("course", []);
	
	app.controller("boardController", function() {
		
		//check if number
		//check if 0
		//check if valid value
		//check if valid for current parent
		//-1 if above is false
		var currentBoard = -1,
			currentSubject = -1;
			
		this.boards = boards;
		this.setCurrentSubject = function(id) {
			this.currentSubject = id;
		};
		
		if(localStorage) {
			if(localStorage.currentBoard) {
				currentBoard = +localStorage.currentBoard;
				if(!((currentBoard || 0 === currentBoard) && boards[currentBoard])) {
					currentBoard = -1;
				}
			}
			
			if(localStorage.currentSubject) {
				currentSubject = +localStorage.currentSubject;
				if(!((currentSubject || 0 === currentSubject) && subjects[currentSubject])) {
					currentSubject = -1;
				}
			}
		}
		
		this.current = currentBoard;
		this.currentSubject = currentSubject;
	});
	
	app.controller("gradeController", function() {
		var currentGrade = -1;
		
		this.grades = grades;
		this.getGrades = function(grades) {
			var ret = [];
			
			if(grades) {
				grades.forEach(function(element) {
					ret.push(this.grades[element])
				}, this);
			}
			
			removeLabels('grade');
			
			return ret;
		};
		
		this.setCurrent = function(id) {
			
			removeLabels('board');
			
			this.current = id;
		};
		
		if(localStorage) {
			if(localStorage.currentGrade) {
				currentGrade = +localStorage.currentGrade;
				if(!((currentGrade || 0 === currentGrade) && grades[currentGrade])) {
					currentGrade = -1;
				}
			}
		}
		
		this.current = currentGrade;
	});
	
	app.controller("subjectController", function() {
		var self = this;
		var currentSubject = -1;
		
		self.subjects = subjects;
		
		self.getSubjects = function(subjects) {
			var ret = [];
			
			if(subjects) {
				subjects.forEach(function(element) {
					ret.push(self.subjects[element])
				}, self);
			}
			
			return ret;
		};
		
		if(localStorage) {
			if(localStorage.currentSubject) {
				currentSubject = +localStorage.currentSubject;
				if(!((currentSubject || 0 === currentSubject) && subjects[currentSubject])) {
					currentSubject = -1;
				}
			}
		}
		
		self.current = currentSubject;
	});
	
	app.controller("resourceController", function() {
		var self = this;
		self.resources = resources;
		
		self.getResources = function(resources) {
			var ret = [];
			
			if(resources) {
				resources.forEach(function(element) {
					//setUrlStatus(self.resources, element);
					ret.push(self.resources[element])
				}, self);
			}
			
			return ret;
		}
	});
	
	function setUrlStatus(resource, index) {
		console.log('inside');
		$.ajax({
			method: 'get',
	        url: resource[index].url,
	        success: function () {
	            resource[index].active = true;
	        },
	        error: function (err) {
	            resource[index].active = false;
				console.log(err);
	        }
	    });
	}
	
	function removeLabels(filter) {
		$('.filters > select#sl-' + filter).on('change', function(){
		    $('.filters option').attr('label', '');
		});
	}
})();