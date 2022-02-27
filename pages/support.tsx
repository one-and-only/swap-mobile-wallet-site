import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Header from "./header";
import Link from "next/link";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export default function Support(): JSX.Element {
  const [to, setTo] = useState("");
  const [issueTitle, setIssueTitle] = useState("");
  const [issueBody, setIssueBody] = useState("");
  const [acceptedPrivacyPolicy, setAcceptedPrivacyPolicy] = useState(false);

  function sendSupportEmail() {
    if (to === "" || issueTitle === "" || issueBody === "" || !acceptedPrivacyPolicy) {
      MySwal.fire({
        title: <p>Error</p>,
        footer: "©2022 Antonios P. (@Revvz)",
        text: "One or more required fields are blank.",
        icon: "error",
        timer: 2000,
        timerProgressBar: true,
      });
    } else {
      fetch(
        `/api/sendSupportEmail?to=${encodeURIComponent(
          to
        )}&issueTitle=${encodeURIComponent(
          issueTitle
        )}&issueBody=${encodeURIComponent(issueBody)}`
      ).then(() =>
        MySwal.fire({
          title: <p>Success</p>,
          footer: "©2022 Antonios P. (@Revvz)",
          text: "Successfully sent a support inquiry. We will respond to you as soon as we can.",
          icon: "success",
          timer: 5000,
          timerProgressBar: true,
        }).then(() => window.location.reload())
      );
    }
  }

  return (
    <div>
      <Header title="Support | Swap Mobile Wallet" />
      <h1 className="center-text">Email Support</h1>
      <Form id="support-form">
        <Form.Group className="mb-3" controlId="to">
          <Form.Label>Email</Form.Label>
          <Form.Control
            onChange={(email) => setTo(email.target.value)}
            name="to"
            type="email"
            placeholder="Email"
            required
          />
          <Form.Text className="text-muted" aria-required>
            We&apos;ll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="issueTitle">
          <Form.Label>Issue</Form.Label>
          <Form.Control
            onChange={(title) => setIssueTitle(title.target.value)}
            name="issueTitle"
            type="text"
            placeholder="Issue Title"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="issueBody">
          <Form.Label>Description</Form.Label>
          <Form.Control
            onChange={(body) => setIssueBody(body.target.value)}
            as="textarea"
            rows={3}
            name="issueBody"
            placeholder="Issue Description"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            required
            type="checkbox"
            onChange={() => setAcceptedPrivacyPolicy(!acceptedPrivacyPolicy)}
            label={
              <p>
                I abide by our
                <Link href="/privacy.html">
                  <a target="_blank"> Privacy Policy</a>
                </Link>
              </p>
            }
          />
        </Form.Group>
        <Button variant="primary" onClick={sendSupportEmail}>
          Submit
        </Button>
      </Form>
    </div>
  );
}
