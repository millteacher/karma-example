describe("我的第一个jasmine测试demo",function  () {
		var a;
		it("对a的一个操作", function  () {
			a=true;
			expect(a).toBe(true);
		});
		it("toBe相当于===",function  () {
			expect(true).toBe(true);
			expect(true).not.toBe("aaa");
		});
});