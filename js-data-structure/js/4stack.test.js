/**
 * Created by zhouli on 18/5/25
 */

// 导入 Stack
var Stack = require('./4stack');

test('Stack', function () {
    var s = new Stack();
    s.push("David");
    s.push("Raymond");
    s.push("Bryan");
    // 期望 stack 长度为3
    expect(s.length()).toBe(3);
    s.clear();
    // 期望 stack 长度为0
    expect(s.length()).toBe(0);

});


