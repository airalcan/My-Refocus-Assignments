const calculatebmi = require("./bmi_calculator");
test("[50kg, 172cm] should be underweight", () => {
expect(calculatebmi(50, 172)).toBe("underweight");
});
test("[50kg, 172cm] should NOT be normal weight", () => {
expect(calculatebmi(50, 172)).not.toBe("normal weight");
});
test("[50kg, 172cm] should NOT be overweight", () => {
expect(calculatebmi(50, 172)).not.toBe("overweight");
});
test("[50kg, 172cm] should NOT be Obese", () => {
expect(calculatebmi(50, 172)).not.toBe("Obese");
});
test("[60kg, 172cm] should be normal weight", () => {
expect(calculatebmi(60, 172)).toBe("normal weight");
});
test("[60kg, 172cm] should NOT be overweight", () => {
expect(calculatebmi(60, 172)).not.toBe("overweight");
});
test("[60kg, 172cm] should NOT be underweight", () => {
expect(calculatebmi(60, 172)).not.toBe("underweight");
});
test("[60kg, 172cm] should NOT be Obese", () => {
expect(calculatebmi(60, 172)).not.toBe("Obese");
});
test("[80kg, 172cm] should be overweight", () => {
expect(calculatebmi(80, 172)).toBe("overweight");
});
test("[80kg, 172cm] should NOT be normal weight", () => {
expect(calculatebmi(80, 172)).not.toBe("normal weight");
});
test("[80kg, 172cm] should NOT be underweight", () => {
expect(calculatebmi(80, 172)).not.toBe("underweight");
});
test("[80kg, 172cm] should NOT be Obese", () => {
expect(calculatebmi(80, 172)).not.toBe("Obese");
});
test("[90kg, 172cm] should be Obese", () => {
expect(calculatebmi(90, 172)).not.toBe("Obese");
});
test("[90kg, 172cm] should NOT be normal weight", () => {
expect(calculatebmi(90, 172)).not.toBe("normal weight");
});
test("[90kg, 172cm] should NOT be overweight", () => {
expect(calculatebmi(90, 172)).not.toBe("overweight");
});
test("[90kg, 172cm] should NOT be underweight", () => {
expect(calculatebmi(90, 172)).not.toBe("underweight");
});