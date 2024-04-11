import MyClass from "../src/myClass.js";
var myObj = new MyClass();
import { expect as _expect } from "chai";
var expect = _expect;
describe("Test suit", function () {
	it("Test the add method", function () {
		expect(myObj.add(1, 2)).to.be.equal(3);
	});
});
