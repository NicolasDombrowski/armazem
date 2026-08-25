import "./chart.css"

export default function Chart({ props }:{ props: { title: string, subtitle: string, secondaryTitle: string, secondarySubtitle: string } }) {
        return (
                <div className="chart">
                        <div className="chartPrincipal">
                                <h1>{props.title}</h1>
                                <h2>{props.subtitle}</h2>
                        </div>
                        {props.secondarySubtitle || props.secondaryTitle ?
                        <div className="chartSecondary">
                                {props.secondaryTitle ? <h1>{props.secondaryTitle}</h1> : null}
                                {props.secondarySubtitle ? <h2>{props.secondarySubtitle}</h2> : null}
                        </div>
                        : null}
                </div>
        )
}