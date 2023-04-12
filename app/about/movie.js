import Link from "next/link"
import Image from "next/image"
export default function Movie(props){
    const imagePath = "https://image.tmdb.org/t/p/original"
    return(
        <div>
            <h2>
                {props.id}
            </h2>
            <h2>
                {props.key}
            </h2>
            <h2>
                {props.title}
            </h2>
            <h2>
                {props.release_date}
            </h2>
            <Link href={`/${props.id}`}>
                <Image width={400} height={300} src={imagePath+props.poster_path} alt="image"/>
            </Link>
        </div>
    )
}