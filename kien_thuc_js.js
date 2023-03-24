//vocabulary:
1. scope (n): phạm vi
2. block (n): khối
3. Identifier (n) : định danh
4. undefined (n) : không xác định
5. hoisting (v) : kéo lên

// Khai báo biến trong hàm:
var : khai báo biến có hiệu lực trong 1 hàm to ( tương tự 1 căn nhà trọ là 1 hàm thì khi khai báo cho chủ nhà là có bạn thuê thì cho dù bạn có có mặt ở
                                                đâu thì chủ nhà vẫn biết bạn)
let : khai báo có hiệu lực trong 1 block vd: for, foreach, if-else, ... ( tương tự như trong căn trọ đó bạn khai báo let có ny của bạn sang chơi, thì
                                                                         chỉ có bạn biết sự có mặt của ny bạn, còn chủ nhà trọ sẽ không biết.)
const : khai báo này có tác dụng trong cả file. nếu đã khai báo thì không thể thay đổi giá trị nếu giá trị đó là primitive (nguyên thủy). còn nếu là mảng
thì vẫn có thể thay đổi giá trị của phần tử của mảng đó ( không thay đổi được phần tử) (tương tự khai báo hằng là căn nhà gồm nhiều phòng, không thể thay
                                                                                        đổi tên phòng nhưng có thể thay đổi nguời ở trong phòng ý)
=> người ta nghĩ ra biến let để bổ sung cho việc khai báo vì khi code còn nhỏ thì ko ảnh hưởng khi ta khai báo bằng var, nhưng khi code lớn hơn hàng trăm
dòng, khi này ta sẽ không kiểm soát được biến đó đã được gọi chưa,dẫn đến cần 1 biến chỉ sử dụng trong các block.

// đọc phần tử trong file html nơi mà file js hiện tại được register:
document.getElementById("id_name")
document.getElementsByClassName("class_name");

// debug trong js:
1. console.log()
2. return

/*lưu ý:
1. Khi tệp js dịch 1 hàm, nó sẽ dịch các khai báo biến trước dù bạn có để nó ở đâu trong hàm (tức nó sẽ tự đưa lên đầu hàm) -> cơ chế hoisting
2. Trong 1 hàm, chúng ta có thể khai báo cùng 1 biến let trong 2 block khác nhau mà không ảnh hưởng gì về giá trị vì khi đó 2 biến này là khác nhau về bản 
   chất.
3. Nếu console.log biến trước rồi mới gán giá trị cho biến thì:
  - Nếu được khai báo bằng var: undefine
  - Nếu được khai báo bằng let: Reference Error
*/
