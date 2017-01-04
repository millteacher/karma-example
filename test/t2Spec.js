describe("我的第二个测试模块",function  () {
	it("toBe 相当于 ===",function  () {
		var a=12;
		var b=a;
		expect(a).toBe(b);
		expect(a).not.toBe(null);//a!==null
	});

	describe("toEqual",function  () {
		
		it("适用于简单的文字和变量",function  () {
			var a=10;
			expect(a).toEqual(10);
		});
		it("也适用于引用类型的对象",function  () {
			var foo={
				a:12,
				b:24
			};
			var bar={
				a:12,
				b:24
			};
			console.log(foo==bar);
			expect(foo).toEqual(bar);
		});
	});
	
});