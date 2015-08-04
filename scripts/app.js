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
			currentGrade = -1,
			currentSubject = -1;
			
		//read state from localStorage
		if(localStorage) {
			if(localStorage.currentBoard) {
				currentBoard = +localStorage.currentBoard;
				if(!((currentBoard || 0 === currentBoard) && boards[currentBoard])) {
					currentBoard = -1;
				}
			}
			
			if(localStorage.currentGrade) {
				currentGrade = +localStorage.currentGrade;
				if(!((currentGrade || 0 === currentGrade) && boards[currentBoard].grades[currentGrade])) {
					currentGrade = -1;
				}
			}
			
			if(localStorage.currentSubject) {
				currentSubject = +localStorage.currentSubject;
				if(!((currentSubject || 0 === currentSubject) && boards[currentBoard].grades[currentGrade].subjects[currentSubject])) {
					currentSubject = -1;
				}
			}
		}
		
		this.current = currentBoard;
		this.currentSubject = currentSubject;
		this.currentGrade = currentGrade;
		this.boards = boards;
		
		this.setCurrentSubject = function(id) {
			this.currentSubject = id;
		};
		
		this.setCurrentGrade = function(id) {
			removeLabels('board');
			this.currentGrade = id;	
		};
		
		this.getGrades = function() {			
			removeLabels('grade');
			if(-1 !== this.current) {
				return this.boards[this.current].grades;
			} else {
				return [];
			}
		};
		
		this.getSubjects = function() {
			if(-1 !== this.currentGrade) {
				return this.boards[this.current].grades[this.currentGrade].subjects;	
			} else {
				return [];
			}
		};
		
		this.getResourceIds = function() {
			if(-1 !== this.currentSubject) {
				return this.boards[this.current].grades[this.currentGrade].subjects[this.currentSubject].resources;
			} else {
				return [];
			}
		}
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