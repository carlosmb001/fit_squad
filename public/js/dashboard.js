document.getElementById("newGoalBtn").addEventListener("click", async (e) => {
    e.preventDefault();
    const workout_id = document.getElementById('workout-btn').value;
    const duration = document.getElementById('goals-btn').value;

    try {
        const response = await fetch('/api/goals', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "duration": duration,
                "workout_id": workout_id
            }),
        });

        if (!response.ok) {
            throw new Error('create goal request failed');
        }

        window.location = '/dashboard'; // Redirect to a different page after successful submission
    } catch (error) {
        console.error('Error creating goal:', error);
    }
})


document.getElementById("postBtn").addEventListener("click", async (e) => {
    e.preventDefault();
    const workout_id = document.getElementById('post-workout-btn').value;
    const duration = document.getElementById('posts-duration-btn').value;
    const goal_id = document.getElementById('post-goals-btn').value;

    try {
        const response = await fetch('/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "duration": duration,
                "workout_id": workout_id,
                "goal_id":goal_id?goal_id:null,
                "mood_after": "Stronger",
                "mood_before": "Tired",
                "achieved": true,
                "caption" : 50
            }),
        });

        if (!response.ok) {
            throw new Error('create post request failed');
        }

        window.location = '/dashboard'; // Redirect to a different page after successful submission
    } catch (error) {
        console.error('Error creating post:', error);
    }
})


document.getElementById("delete-post").addEventListener("click", async (e) => {
    e.preventDefault();

    try {
        const response = await fetch('/api/posts/'+e.target.dataset.id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },

        });

        if (!response.ok) {
            throw new Error('delete post request failed');
        }

        window.location = '/dashboard'; // Redirect to a different page after successful submission
    } catch (error) {
        console.error('Error creating post:', error);
    }
})