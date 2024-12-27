interface Review {
    title: string;
    body: string;
    rating: number;
}

export default function ReviewCard({ review }: { review: Review }) {
    return (
        <div>
            <h3>{review.title}</h3>
            <p>{review.body}</p>
            <p>Rating: {review.rating}</p>
        </div>
    );
}
