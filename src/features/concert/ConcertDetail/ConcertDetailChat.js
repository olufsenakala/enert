import React, { Component } from 'react';
import { Segment, Header, Comment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { formatDistance } from 'date-fns';

import placeHolder from '../../../assets/adidas.webp';
import ConcertDetailChatForm from './ConcertDetailChatForm';

class ConcertDetailChat extends Component {
  state = {
    showReplyForm: false,
    selectedCommentId: null
  }

  handleOpenReplyForm = (id) => () => {
    this.setState({
      showReplyForm: true,
      selectedCommentId: id
    })
  }

  handleCloseReplyForm = () => {
    this.setState({
      selectedCommentId: null,
      showReplyForm: false
    })
  }

  render() {
    const { addConcertComment, concertId, concertChat } = this.props;
    const { showReplyForm, selectedCommentId } = this.state;
    return (
      <div className="tc_cmnt__wrap">
        <Segment
          textAlign="center"
          attached="top"
          inverted
          color="teal"
          style={{ border: 'none' }}
        >
          <Header>Chat about this event</Header>
        </Segment>

        <Segment attached>
          <Comment.Group>
            {concertChat && concertChat.map((comment) => (
              <Comment key={comment.id}>
                <Comment.Avatar src={comment.photoURL || placeHolder} />
                <Comment.Content>
                  <Comment.Author 
                    as={Link}
                    to={`/profile/${comment.uid}`}
                  >
                    {comment.displayName}
                  </Comment.Author>
                  <Comment.Metadata>
                    <div>{formatDistance(comment.date, Date.now())} ago</div>
                  </Comment.Metadata>
                  <Comment.Text>{comment.text}</Comment.Text>
                  <Comment.Actions>
                    <Comment.Action
                      onClick={this.handleOpenReplyForm(comment.id)}
                    >
                      Reply
                    </Comment.Action>
                    {showReplyForm && selectedCommentId === comment.id && (
                      <ConcertDetailChatForm 
                        addConcertComment={addConcertComment}
                        concertId={concertId}
                        form={`reply_${comment.id}`}
                        closeForm={this.handleCloseReplyForm}
                        parentId={comment.id}
                      />
                    )}
                  </Comment.Actions>
                </Comment.Content>
                

                {comment.childNodes && comment.childNodes.map((child) => (
                  <Comment.Group>
                    <Comment key={child.id}>
                      <Comment.Avatar src={child.photoURL || placeHolder} />
                      <Comment.Content>
                        <Comment.Author 
                          as={Link}
                          to={`/profile/${child.uid}`}
                        >
                          {child.displayName}
                        </Comment.Author>
                        <Comment.Metadata>
                          <div>{formatDistance(child.date, Date.now())} ago</div>
                        </Comment.Metadata>
                        <Comment.Text>{child.text}</Comment.Text>
                        <Comment.Actions>
                          <Comment.Action
                            onClick={this.handleOpenReplyForm(child.id)}
                          >
                            Reply
                          </Comment.Action>
                          {showReplyForm && selectedCommentId === child.id && (
                            <ConcertDetailChatForm 
                              addConcertComment={addConcertComment}
                              concertId={concertId}
                              form={`reply_${child.id}`}
                              closeForm={this.handleCloseReplyForm}
                              parentId={child.parentId}
                            />
                          )}
                        </Comment.Actions>
                      </Comment.Content>
                    </Comment>
                  </Comment.Group>
                ))}

              </Comment>
            ))}

          </Comment.Group>
            
          <ConcertDetailChatForm 
            parentId={0}
            addConcertComment={addConcertComment} 
            concertId={concertId}
            form={'newComment'}
          />

        </Segment>
      </div>
    )
  }
}

export default ConcertDetailChat;