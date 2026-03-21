export const calculateAvgRating = (ratings) => {
	// Calculate total rating count
	const ratingSum = ratings.reduce((sum, rating) => sum + rating.count, 0);

	// If no ratings
	if (ratingSum === 0) return 0;

	// Calculate weighted rating sum
	const weightedRatingSum = ratings.reduce((sum, rating) => {
		const star = Number(rating.name.charAt(0));
		return sum + star * rating.count;
	}, 0);

	// Compute average rating
	const avgRating = Number(weightedRatingSum / ratingSum).toFixed(1);

	return avgRating;
};
