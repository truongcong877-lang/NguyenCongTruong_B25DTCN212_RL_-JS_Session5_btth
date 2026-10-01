const rawTicketCode = " med-rhm-0815-bhyt ";

const cleanTicketCode = rawTicketCode.trim();
const normalizedCode = cleanTicketCode.toUpperCase();

const isValidPrefix = normalizedCode.startsWith("MED-");

const departmentCode = normalizedCode.slice(4, 7);
const appointmentNumber = normalizedCode.slice(8, 12);

const hasBHYT = normalizedCode.includes("BHYT");

const examinationFee = 150000;
const discount = hasBHYT ? examinationFee * 0.8 : 0;
const finalFee = examinationFee - discount;

const border = "=".repeat(35);

console.log(`
${border}
        THẺ TIẾP ĐÓN BỆNH NHÂN
${border}
Mã phiếu       : ${normalizedCode}
Mã chuyên khoa : ${departmentCode}
Số thứ tự      : ${appointmentNumber}
BHYT           : ${hasBHYT ? "Có" : "Không"}
Giá khám       : ${examinationFee.toLocaleString("vi-VN")} VNĐ
Giảm BHYT      : ${discount.toLocaleString("vi-VN")} VNĐ
Thanh toán     : ${finalFee.toLocaleString("vi-VN")} VNĐ
Trạng thái     : ${isValidPrefix ? "Hợp lệ" : "Không hợp lệ"}
${border}
`);