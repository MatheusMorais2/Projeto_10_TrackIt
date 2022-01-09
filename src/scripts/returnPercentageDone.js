
export default function returnPercentageDone(todaysHabits) {
    if (todaysHabits.length > 0) {
        let percentageDone = (todaysHabits.filter(elem => elem.done === true).length / todaysHabits.length) * 100;
        return percentageDone;
    } else return 0
}