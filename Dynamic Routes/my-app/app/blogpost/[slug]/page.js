export default async function Page({ params }) {

    // throw new error("Error hainn")

    const { slug } = await params
    
    let languages = ["python", "JavaScript", "C++", "dayyan"]

    if (languages.includes(slug)) {
        return <div>My Post:{slug}</div>
    }

    else {
        return <div>Page Not Found</div>
    }

  return <div>My Post:{slug}</div>
}
