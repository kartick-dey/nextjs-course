export default function DocsDetailsPage({ params }: { params: { slug: string[] } }) {
    if (params.slug?.length === 2) {
        return (
            <h2>
                Viewing docs for feature {params.slug[0]} and concept {params.slug[1]}
            </h2>
        );
    } else if (params.slug?.length === 1) {
        return <h2> Viewing docs for feature {params.slug[0]}</h2>;
    }
    return (
        <div>
            <h1>Docs Details</h1>
            <p>Documentation details go here.</p>
        </div>
    );
}
