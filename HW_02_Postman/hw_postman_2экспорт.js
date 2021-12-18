{
	"info": {
		"_postman_id": "28850dd1-7b77-45f6-91d3-b013c6ae5c2e",
		"name": "Postman_HW2",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
	},
	"item": [
		{
			"name": "EP_1",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"pm.test(\"Status code is 200\", function () {\r",
							"    pm.response.to.have.status(200);\r",
							"});"
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [],
				"body": {
					"mode": "formdata",
					"formdata": []
				},
				"url": {
					"raw": "{{url}}/first",
					"host": [
						"{{url}}"
					],
					"path": [
						"first"
					]
				}
			},
			"response": []
		},
		{
			"name": "EP_2",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"var name =\"Lena\";\r",
							"var age = \"27\";\r",
							"var salary = 1000;\r",
							"var res = pm.response.json();\r",
							"var req = pm.request.body.formdata.toJSON();\r",
							"\r",
							"pm.test(\"Status code is 200\", function () {\r",
							"    pm.response.to.have.status(200);\r",
							"});\r",
							"pm.test(\"Check the name\", function() {\r",
							"pm.expect(res.name).to.eql(name);\r",
							"});\r",
							"\r",
							"pm.test(\"Check the age\", function() {\r",
							"pm.expect(res.age).to.eql(age);\r",
							"});\r",
							"\r",
							"pm.test(\"Check the salary\", function() {\r",
							"pm.expect(res.salary).to.eql(salary);\r",
							"});\r",
							"\r",
							" pm.test(\"Check real name\", function() {\r",
							"pm.expect(res.name).to.eql(\"Lena\");\r",
							"}); \r",
							"pm.test(\"Check real age\", function() {\r",
							"pm.expect(res.age).to.eql(\"27\");\r",
							"}); \r",
							"pm.test(\"Check real salary\", function() {\r",
							"pm.expect(res.salary).to.eql(1000);\r",
							"});\r",
							"console.log(pm.response.json().family);\r",
							"\r",
							"pm.test(\"Check u_salary\", function () { \r",
							"pm.expect(pm.response.json().family.u_salary_1_5_year).to.eql(res.salary*4);\r",
							"   });"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "formdata",
					"formdata": [
						{
							"key": "name",
							"value": "Lena",
							"type": "text"
						},
						{
							"key": "age",
							"value": "27",
							"type": "text"
						},
						{
							"key": "salary",
							"value": "1000",
							"type": "text"
						}
					]
				},
				"url": {
					"raw": "{{url}}/user_info_3",
					"host": [
						"{{url}}"
					],
					"path": [
						"user_info_3"
					]
				}
			},
			"response": []
		},
		{
			"name": "EP_3",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							"pm.test(\"Status code is 200\", function () {\r",
							"    pm.response.to.have.status(200);\r",
							"});\r",
							"var resp_JSON = pm.response.json();\r",
							"var req = pm.request.url.query.toObject();\r",
							"\r",
							"pm.test(\"Your test Age\", function () {\r",
							"    var jsonData = pm.response.json();\r",
							"    pm.expect(jsonData.age).to.eql(\"27\");\r",
							"});\r",
							"pm.test(\"Your test Name\", function () {\r",
							"    var jsonData = pm.response.json();\r",
							"    pm.expect(jsonData.name).to.eql(\"Lena\");\r",
							"});\r",
							"pm.test(\"Your test Salary\", function () {\r",
							"    var jsonData = pm.response.json();\r",
							"    pm.expect(jsonData.salary).to.eql(1000);\r",
							"});\r",
							"\r",
							"\r",
							"console.log(resp_JSON.family);\r",
							"\r",
							"\r",
							"pm.test(\"Check that dog has Name\", function () {\r",
							"    \r",
							"    pm.expect(resp_JSON.family.pets.dog).to.have.property(\"name\");\r",
							"   });\r",
							"\r",
							"pm.test(\"Check that dog has Age\", function () {\r",
							"        pm.expect(resp_JSON.family.pets.dog).to.have.property(\"age\");\r",
							"   });\r",
							" pm.test(\"DoghasAge\", function () {\r",
							"        pm.expect(resp_JSON.family.pets.dog.age).to.eql(4);\r",
							"   });\r",
							"   pm.test(\"DoghasName\", function () {\r",
							"        pm.expect(resp_JSON.family.pets.dog.name).to.eql(\"Luky\");\r",
							"   });"
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [],
				"body": {
					"mode": "formdata",
					"formdata": []
				},
				"url": {
					"raw": "{{url}}/object_info_3?name=Lena&age=27&salary=1000",
					"host": [
						"{{url}}"
					],
					"path": [
						"object_info_3"
					],
					"query": [
						{
							"key": "name",
							"value": "Lena"
						},
						{
							"key": "age",
							"value": "27"
						},
						{
							"key": "salary",
							"value": "1000"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "EP_4",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"pm.test(\"Status code is 200\", function () {\r",
							"    pm.response.to.have.status(200);\r",
							"});\r",
							"var resp_JSON = pm.response.json();\r",
							"var req = pm.request.url.query.toObject();\r",
							"\r",
							"pm.test(\"Your test Age\", function () {\r",
							"    var jsonData = pm.response.json();\r",
							"    pm.expect(jsonData.age).to.eql(27);\r",
							"});\r",
							"pm.test(\"Your test Name\", function () {\r",
							"    var jsonData = pm.response.json();\r",
							"    pm.expect(jsonData.name).to.eql(\"Lena\");\r",
							"});\r",
							"console.log(req.salary);\r",
							"console.log(resp_JSON.salary);\r",
							"console.log(resp_JSON.salary[0]);\r",
							"console.log(resp_JSON.salary[1]);\r",
							"console.log(resp_JSON.salary[2]);\r",
							"\r",
							"pm.test(\"Check salary\", function () {\r",
							"        pm.expect(resp_JSON.salary[0]).to.eqls(1000);\r",
							"});\r",
							"\r",
							"pm.test(\"Check salary*2\", function () {\r",
							"        pm.expect(resp_JSON.salary[1]).to.eqls(\"2000\");\r",
							"});\r",
							"\r",
							"pm.test(\"Check salary*3\", function () {\r",
							"        pm.expect(resp_JSON.salary[2]).to.eqls(\"3000\");\r",
							"});\r",
							"\r",
							"var resp_JSON = pm.response.json();\r",
							"pm.environment.get(\"name\", resp_JSON.name);\r",
							"pm.environment.get(\"age\", resp_JSON.age);\r",
							"pm.environment.get(\"salary\", resp_JSON.salary);\r",
							"\r",
							"\r",
							"for (var i = 0; i < req.length; i++) {\r",
							"        if (req[i].key == \"salary[0]\" & req[i].value == salary) {\r",
							"            console.log(req[i].value, _name, \"names are equal\");\r",
							"        }\r",
							"        else if (req[i].key == \"salary[1]\" & req[i].value == \"2000\") {\r",
							"            console.log(req[i].value, _age, \"age is equal\");\r",
							"        }\r",
							"        else if (req[i].key == \"salary[2]\" & req[i].value == \"3000\") {\r",
							"            console.log(req[i].value, _salary, \"salary is equal\");\r",
							"        }\r",
							"       \r",
							"    };\r",
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "{{url}}/object_info_4?name=Lena&age=27&salary=1000",
					"host": [
						"{{url}}"
					],
					"path": [
						"object_info_4"
					],
					"query": [
						{
							"key": "name",
							"value": "Lena"
						},
						{
							"key": "age",
							"value": "27"
						},
						{
							"key": "salary",
							"value": "1000"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "EP_5",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"var resp_JSON = pm.response.json();\r",
							"\r",
							"pm.environment.set(\"salary\", resp_JSON.salary);\r",
							"pm.environment.set(\"age\", resp_JSON.age);\r",
							"pm.environment.set(\"name\", resp_JSON.name);\r",
							"\r",
							"\r",
							"pm.test(\"Status code is 200\", function () {\r",
							"    pm.response.to.have.status(200);\r",
							"});\r",
							"var resp_JSON = pm.response.json();\r",
							"var req = pm.request.body.formdata.toJSON();\r",
							"var Qsalary = request.data.salary;\r",
							"var age = request.data.age;\r",
							"\r",
							"pm.test(\"Qa start salary\", function () {\r",
							"        pm.expect(resp_JSON).to.have.property(\"start_qa_salary\");\r",
							" });\r",
							" pm.test(\"Qa salary 6 months\", function () {\r",
							"        pm.expect(resp_JSON).to.have.property(\"qa_salary_after_6_months\");\r",
							" });\r",
							" pm.test(\"Qa salary 3.5 years\", function () {\r",
							"        pm.expect(resp_JSON).to.have.property(\"qa_salary_after_3.5_years\");\r",
							" });\r",
							" pm.test(\"Qa salary 12 months\", function () {\r",
							"        pm.expect(resp_JSON).to.have.property(\"qa_salary_after_12_months\");\r",
							" });\r",
							"pm.test(\"Qa salary 1.5 years\", function () {\r",
							"        pm.expect(resp_JSON).to.have.property(\"qa_salary_after_1.5_year\");\r",
							" });\r",
							" pm.test(\"Check person\", function () {\r",
							"        pm.expect(resp_JSON).to.have.property(\"person\");\r",
							" });\r",
							" pm.test(\"how much is qa start salary\", function () {\r",
							"        pm.expect(resp_JSON.start_qa_salary).to.eql(+(Qsalary));\r",
							"        });\r",
							" pm.test(\"how much is qa salary after 6 months\", function () {\r",
							"        pm.expect(resp_JSON.qa_salary_after_6_months).to.eql(+(Qsalary*2));\r",
							"        });\r",
							"pm.test(\"how much is qa salary after 3,5 years\", function () {\r",
							"        pm.expect(resp_JSON[\"qa_salary_after_3.5_years\"]).to.eql(+(Qsalary*3.8));\r",
							"        });\r",
							"pm.test(\"how much is qa salary after 1,5 year\", function () {\r",
							"        pm.expect(resp_JSON[\"qa_salary_after_1.5_year\"]).to.eql(+(Qsalary*3.3));\r",
							"        });       \r",
							"pm.test(\"how much is qa salary after 12 months\", function () {\r",
							"        pm.expect(resp_JSON.qa_salary_after_12_months).to.eql(+(Qsalary*2.7));\r",
							"        });     \r",
							"pm.test(\"Check age\", function () {\r",
							"        pm.expect(resp_JSON.u_age).to.eql(req.age);\r",
							" });\r",
							"pm.test(\"how much is qa salary after 5 years\", function () {\r",
							"        pm.expect(resp_JSON.person.u_salary_5_years).to.eql(+(Qsalary*4.2));\r",
							"        });     \r",
							"\r",
							"for (var i = 0; i < req.length; i++) {\r",
							"        if (req[i].key == \"person\" & req[i].value == \"u_name\") {\r",
							"            console.log(req[i].value,  \"Lena\");\r",
							"        }\r",
							"        else if (req[i].key == \"person\" & req[i].value == \"u_age\") {\r",
							"            console.log(req[i].value, \"27\");\r",
							"        }\r",
							"        else if (req[i].key == \"salary\" & req[i].value == \"1000\") {\r",
							"            console.log(req[i].value,  \"1000\");\r",
							"        }\r",
							"       \r",
							"    };"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "formdata",
					"formdata": [
						{
							"key": "name",
							"value": "Lena",
							"type": "text"
						},
						{
							"key": "age",
							"value": "27",
							"type": "text"
						},
						{
							"key": "salary",
							"value": "1000",
							"type": "text"
						}
					]
				},
				"url": {
					"raw": "{{url}}/user_info_2",
					"host": [
						"{{url}}"
					],
					"path": [
						"user_info_2"
					]
				}
			},
			"response": []
		}
	]
}
