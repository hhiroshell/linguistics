# Pull base image
# ---------------
FROM wnameless/oracle-xe-11g

# Maintainer
# ----------
MAINTAINER hhayakawa_jp <charley.horse@outlook.com>

# Copy packages
# -------------
ADD jbatch      /tmp/jbatch
ADD linguistics /tmp/linguistics

# Create JobRepository
# -------------
RUN /tmp/jbatch/createJobRepository.sh repuser reppswd

# Linguistics Schema
# -------------
RUN /tmp/linguistics/createLinguisticsSchema.sh linguistics linguistics

# CMD /usr/sbin/startup.sh
CMD /usr/sbin/startup.sh && /usr/sbin/sshd -D

