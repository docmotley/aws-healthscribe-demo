// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React, { memo } from 'react';

import { useNavigate } from 'react-router-dom';

import Alert from '@cloudscape-design/components/alert';
import Box from '@cloudscape-design/components/box';
import Container from '@cloudscape-design/components/container';
import ContentLayout from '@cloudscape-design/components/content-layout';
import Header from '@cloudscape-design/components/header';
import Link from '@cloudscape-design/components/link';
import TextContent from '@cloudscape-design/components/text-content';

import { useAuthContext } from '@/store/auth';

function Welcome() {
    const navigate = useNavigate();
    const { isUserAuthenticated } = useAuthContext();

    function Content() {
        if (isUserAuthenticated) {
            return (
                <TextContent>
                    <p>This is an AIMI DDxHelper test Harness.</p>
                    <p>
                        This environment is meant to preview variuos AWS hosted HIPAA compliant services, and test 
                        DDxHelper features that will automatically generate clinical notes by analyzing patient-clinician
                        conversations.
                    </p>
                    <p>Currently this test environment will allow us to:</p>
                    <ul>
                        <li>
                            <Link onFollow={() => navigate('/conversations')}>View DDxHelper results</Link>,
                            including:
                        </li>
                        <ul>
                            <li>Summarized clinical notes</li>
                            <li>Rich consultation transcripts</li>
                            <li>Transcript segmentation</li>
                            <li>Evidence mapping</li>
                            <li>Structured medical terms</li>
                        </ul>
                        <li>
                            Integrate DDxHelper output with Comprehend Medical services, allowing us to:
                            <ul>
                                <li>
                                    Infer medical ontologies (RxNorm, ICD-10-CM, and SNOMED CT) from the DDxHelper
                                    trancript
                                </li>
                                <li>
                                    Detect medical terminologies and infer medical ontologies from the DDxHelper
                                    insights output
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link onFollow={() => navigate('/new')}>Submit or record your own audio file</Link> to
                            DDxHelper.
                        </li>
                        <li>
                            <Link onFollow={() => navigate('/generate')}>Generate a multi-speaker audio file</Link>
                        </li>
                    </ul>
                </TextContent>
            );
        } else {
            return <Alert>Log in for full functionality.</Alert>;
        }
    }

    function Footer() {
        return (
            <Box textAlign="center" color="text-body-secondary" fontSize="body-s">
                <p>Copyright AIMI, Inc. or its affiliates. All Rights Reserved.</p>
            </Box>
        );
    }

    return (
        <ContentLayout header={<Header variant="h2">Test Application Experience powered by AWS</Header>}>
            <Container footer={<Footer />}>
                <Content />
            </Container>
        </ContentLayout>
    );
}

export default memo(Welcome);
