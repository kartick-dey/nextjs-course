import ReviewCard from '@/app/components/review-card';
import { notFound } from 'next/navigation';
export default function ReviewPage({ params }: { params: { reviewId: string; productId: string } }) {
    if (parseInt(params.reviewId) > 10) {
        return notFound();
    }
    return (
        <div>
            <h1>Review {params.reviewId}</h1>
            <p>This is a review of product {params.productId}</p>
            <ReviewCard review={{ title: 'Test Review', body: 'Review Body', rating: 5 }} />
        </div>
    );
}
