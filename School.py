from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def school_central():
    # This is the "Data" the template was missing
    status_msg = "Welcome back, Student!"
    
    announcements = [
        {"title": "Midterm Exams Schedule", "date": "Oct 15, 2023"},
        {"title": "Holiday Notice: No School Monday", "date": "Oct 10, 2023"}
    ]
    
    papers = [
        {"subject": "Mathematics", "year": 2022, "premium": False},
        {"subject": "Advanced Physics", "year": 2023, "premium": True},
        {"subject": "History Paper 1", "year": 2021, "premium": False}
    ]

    return render_template('index.html', 
                           status=status_msg, 
                           announcements=announcements, 
                           papers=papers)

if __name__ == '__main__':
    app.run(debug=True)
