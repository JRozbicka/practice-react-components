import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

class Article extends React.Component {
    state = {
        
        comments: ['test1', 'test2'],
        text:' '
    }
    onNewTaskChange= (e) => {
        this.setState(() => ({
           
            text:e.target.value
           
        }))
    }
    addNewComment= (e)=>{
        e.preventDefault()
        const newComment = [
            this.state.text
        ]
        this.setState((prvState)=>({
            text:'',
            comments:prvState.comments.concat(newComment)
        }))
    }
    deleteComment =(commentId)=>{
        console.log('delete');
        this.setState((prevState)=>({
            comments:prevState.comments.filter((com)=>
                com.id !== commentId)
        }))
        }
    
    
    render() {
        const {title, body} = this.props;
        const {comments} = this.state
        return (
            <article>
                <h1>{ title }</h1>
                <p>{ body }</p>
                <section>
                    <form 
                    onSubmit={this.addNewComment}>
                        <div>
                            <label
                            type={'text'}
                            >
                                <textarea 
                                    style={{ "minWidth": "300px", "minHeight": "120px" }} 
                                    name="content" 
                                    value={this.state.text}
                                    onChange={this.onNewTaskChange}
                                
                                />
                            </label>
                        </div>
                        <div><input type="submit" 
                        value="dodaj komentarz" 
                        onSubmit={this.addNewComment} /></div>
                    </form>
                    <ul>
                        {comments.map((comment, id)=>{
                            return (
                                <li key={comment.id}>{comment}
                                <button
                                onClick={(e)=>this.deleteComment(id)}>
                                    delete</button></li>
                            )
                        })}
                    </ul>
                </section>
            </article>
        )
    }
}

root.render(
    <Article 
        title="Programowanie jest super!"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis justo ipsum, eleifend vel quam eget, lobortis posuere arcu. In vitae eros in nisi sodales aliquam..."
    />
);
