const commutesPerYear = 260 * 2;
const litresPerKM = 10 / 100;
const gasLitreCost = 1.5;
const litreCostKM = litresPerKM * gasLitreCost;

const secondsToDhms = (seconds) => {
    seconds = Number(seconds);
    var d = Math.floor(seconds / (3600*24));
    var h = Math.floor(seconds % (3600*24) / 3600);
    var m = Math.floor(seconds % 3600 / 60);
    
    var dDisplay = d > 0 ? d + (d === 1 ? " day, " : " days, ") : "";
    var hDisplay = h > 0 ? h + (h === 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m === 1 ? " minute " : " mins ") : "";
    return dDisplay + hDisplay + mDisplay;
}

const Distance = (props) => {
    

    if (!props.leg.distance || !props.leg.duration) return null;
    console.log(props.leg.duration);

    const days = secondsToDhms(commutesPerYear * props.leg.duration.value);

    const costPerDay = Math.round(
        (props.leg.distance.value / 1000) * litreCostKM * 2 * 100
    ) / 100;

    const costPerYear = Math.round(
        (props.leg.distance.value / 1000) * litreCostKM * commutesPerYear * 100
    ) / 100;

    return (
    <div>
        <p>
           You live <span className="bold">{props.leg.distance.text}</span> from your
           workplace, taking about <span className="bold">{props.leg.duration.text}</span> by car.
           You spend <span className="bold"> ${new Intl.NumberFormat().format(costPerDay)} </span>
           per day (round trip) on gas.
        </p>
        <br />
        <p>
            In a year, you spend <span className="bold">{days}</span> commuting while spending
            approximately<span className="bold"> ${new Intl.NumberFormat().format(costPerYear)}</span> on gas.
        </p>
    </div>
    )
}

export default Distance;