var tutorServices = angular.module("tutor.services", []);

tutorServices.service("configService", function() {

    var opts = ["stBlack", "stWhite"];

    var random = Math.floor((Math.random() * 1234567)%2);
    var currentTheme = opts[random];
    // var currentTheme = "default";

    var next = false;

    var badgeFlags = [false, false];

    this.setTheme = function(value) {
        console.log("setting theme: " + value);
        currentTheme = value;
    };

    this.getTheme = function() {
        return currentTheme;
    };

    this.setNext = function(value) {
        next = value;
    };

    this.getNext = function() {
        return next;
    };

    this.addBadge = function(id) {
        badgeFlags[id] = true;
    };

    this.getBadges = function() {
        return badgeFlags;
    };

});

tutorServices.service("User", function($http) {
    var resp = {
        startTime: 0,
        endTime: 0,
        name: "",
        gender: "",
        age: "",
        testType: "",
        ethnicity: "",
        sexualOrientation: "",
        civilState: "",
        city: "",
        email: "",
        whatsapp:"",
        universityEducation: "",
        institucion:"",
        educationLevel: "",
        conclusion: "",
        pretestPoints: 0,
        pretest2Points: 0,
        activityPoints: 0,
        posttestPoints: 0,
        flowPoints: 0,
        pre: [],
        pre2: [],
        post: [],
        flow: [],
    };

    this.setName = function(value) {
        resp.name = value;
    }
    this.setGender = function(value) {
        resp.gender = value;
    };

    this.setUniversityEducation = function(value) {
        resp.universityEducation = value;
    };

    this.setInstitucion = function(value) {
        resp.institucion = value;
    };
    this.setEducationLevel = function(value) {
        resp.educationLevel = value;
    };
    this.setConclusion = function(value) {
        resp.conclusion = value;
    };

    this.setAge = function(value) {
        resp.age = value;
    };

    // this.setEmail = function(value) {
    //     resp.email = value;
    // }

    this.setEthnicity = function(value) {
        resp.ethnicity = value;
    }

    this.setSexualOrientation = function(value) {
        resp.sexualOrientation = value;
    }
    this.setCivilState = function(value) {
        resp.civilState = value;
    }
    this.setCity = function(value) {
        resp.city = value;
    }
    this.setEmail = function(value) {
        resp.email = value;
    }
    this.setWhatsapp = function(value) {
        resp.whatsapp = value;
    }
    this.setTestType = function(value) {
        resp.testType = value;
    };

    this.setPretestPoints = function(value) {
        resp.pretestPoints = value;
    };

    this.setPretest2Points = function(value) {
        resp.pretest2Points = value;
    };

    this.setPosttestPoints = function(value) {
        resp.posttestPoints = value;
    };
    this.setFlowPoints = function(value) {
        resp.flowPoints = value;
    };

    this.setActivityPoints = function(value) {
        resp.activityPoints = value;
    };

    this.getResponse = function() {
        return resp;
    };

    this.getMotivation = function() {
        return resp.pretestPoints;
    };

    this.setPre = function(value) {
        resp.pre = value;
    };

    this.setPre2 = function(value) {
        resp.pre2 = value;
    };

    this.setPost = function(value) {
        resp.post = value;
    };

    this.setFlow = function(value) {
        resp.flow = value;
    };

    this.setQuestions = function(value) {
        resp.questions = value;
    };

    this.setStartTime = function(value) {
        resp.startTime = value;
    };

    this.setEndTime = function(value) {
        resp.endTime = value;
    };

    this.save = function() {
        $http({
            url: "https://weblab.nees.com.br/wilamis/save-response",
            dataType: "json",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            data: resp
        }).then(function(response) {
            // success
            console.log("response sent!");

        }, function(response) {
            // failed
            console.error("Failed to submit participant response. " + response);
        });
    };

});
