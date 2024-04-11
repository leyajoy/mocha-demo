import MyClass from "../src/myClass.js";
import { expect } from "chai";
import sinon from "sinon";

const myObj = new MyClass();

describe("Test suit", function () {
	it("Test the add method", function () {
		expect(myObj.add(1, 2)).to.be.equal(3);
	});

	it("spy the add method", function () {
		const spy = sinon.spy(myObj, "add");
		myObj.callAnotherFn(10, 20);
		// sinon.assert.calledOnce(spy);
		expect(spy.calledOnce).to.be.true;
		expect(spy.calledWith(10, 20)).to.be.true;
	});
});
