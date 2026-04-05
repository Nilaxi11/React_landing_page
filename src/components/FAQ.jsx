import { Container, Accordion } from 'react-bootstrap';

function FAQ() {
  return (
    <section className="ptb_100" id='FAQ'>
      <Container>

        {/* TITLE */}
        <h2 className="text-center fw-bold" style={{ fontSize: '40px' }}>
          Have Questions? Look Here
        </h2>

        <p className='text-center pb-5'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos
          <br /> quae quo ad iste ipsum officiis deleniti asperiores sit.
        </p>
        {/* TITLE */}

        {/* ACCORDION  START*/}
        <div className='faq-wrapper'>
          <Accordion defaultActiveKey="0">

            {/* item 1 */}
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                How to install the app?
              </Accordion.Header>
              <Accordion.Body>
                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.
              </Accordion.Body>
            </Accordion.Item>
            {/* item 1 */}

            {/* item 2 */}
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                Can i get a Support From Author?
              </Accordion.Header>
              <Accordion.Body>
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
              </Accordion.Body>
            </Accordion.Item>
            {/* item 2 */}

            {/* item 3 */}
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                Do you Have a Free Trial?
              </Accordion.Header>
              <Accordion.Body>
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </Accordion.Body>
            </Accordion.Item>
            {/* item 3 */}

            {/* item 4 */}
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                How can i edit my personal information?
              </Accordion.Header>
              <Accordion.Body>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.            </Accordion.Body>
            </Accordion.Item>
            {/* item 4 */}

            {/* item 5 */}
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                Contact form isn't working?
              </Accordion.Header>
              <Accordion.Body>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.              </Accordion.Body>
            </Accordion.Item>
            {/* item 5  */}

          </Accordion>
        </div>
        {/* ACORDIAN END */}
      </Container>
    </section>
  );
}

export default FAQ;