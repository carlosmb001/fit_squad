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
            alert ('create goal request failed');
            throw new Error('create goal request failed');
        }
        //Alerts User of request error
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
    const achieved = document.getElementById('achieved').checked;
    let mood_after = ""

    Array.from(document.querySelectorAll('.clicked')).forEach((button) => {
        mood_after = button.dataset.mood;
        button.classList.remove("clicked");
    })

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
                "mood_after": mood_after,
                "mood_before": "Neutral",
                "achieved": achieved,
                "caption" : 50
            }),
        });

        if (!response.ok) {
            throw new Error('create post request failed');
        }
        //Alerts user of request error
        window.location = '/dashboard'; // Redirect to a different page after successful submission
    } catch (error) {
        console.error('Error creating post:', error);
    }
})


Array.from(document.querySelectorAll('.delete-post')).forEach(function(button) {
    button.addEventListener("click", async (e) => {
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
});



Array.from(document.querySelectorAll('.delete-goal')).forEach(function(button) {

    button.addEventListener("click", async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/goals/'+e.target.dataset.id, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },

            });

            if (!response.ok) {
                throw new Error('delete goal request failed');
            }

            window.location = '/dashboard'; // Redirect to a different page after successful submission
        } catch (error) {
            console.error('Error creating goal:', error);
        }
    })
});

const newPostEmoji = Array.from(document.querySelectorAll('.newpost-emoji'))
newPostEmoji.forEach(function(button) {

    button.addEventListener("click", async (e) => {
        e.preventDefault();

        if (e.target.classList.contains("clicked")) {
            e.target.classList.remove("clicked")
            return
        }
            // First remove 'clicked' class from all buttons
        newPostEmoji.forEach(function(item){
            item.classList.remove("clicked");
        })
        
        // Next add 'clicked' class to clicked button
        e.target.classList.add("clicked");

    })
})