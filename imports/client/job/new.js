import { app } from '/imports/lib/app.js';
import { Template } from 'meteor/templating';
import '/imports/client/components/job-form/job-form.js';
import './new.jade';

Template.newjob.onRendered(app.isReady);
