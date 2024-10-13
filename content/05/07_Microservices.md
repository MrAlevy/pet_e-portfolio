# Monolithic vs. Microservices

The debate between Monolithic and Microservices architectures is a central topic in modern software development. Biggs et al. (2018) argue that monolithic operating systems (OS) are inherently flawed due to security weaknesses and scalability challenges. They advocate for microkernel-based designs, which improve security by isolating components, reducing the attack surface, and improving system resilience. In contrast, Bucchiarone et al. (2018) provide an experience-based perspective from the banking domain, highlighting the shift from monolithic to microservices architecture. They argue that microservices offer greater flexibility, scalability, and maintainability, especially for systems requiring frequent updates and handling large user bases.
</br>

As noted by Biggs et al. (2018), microkernel systems isolate components, which limits the impact of security breaches. Microservices similarly isolate services, preventing vulnerabilities from spreading across the system.
</br>

Bucchiarone et al. (2018) emphasize the ease of scaling individual services and maintaining systems built with microservices, making them more suitable for modern, dynamic applications.
</br>

Microservices architecture fosters innovation by allowing teams to work independently and quickly deploy updates, avoiding the bottlenecks often present in monolithic systems.
</br>

**References**
- Biggs, S., Lee, D., & Heiser, G. (2018) The Jury Is In: Monolithic OS Design Is Flawed: Microkernel-based Designs Improve Security. Proceedings of the 9th Asia-Pacific Workshop on Systems (APSys '18). ACM, 16:1–7.
- Bucchiarone, A., Dragoni, N., Dustdar, S., Larsen, S.T., & Mazzara, M. (2018) From Monolithic to Microservices: An Experience Report from the Banking Domain. IEEE Software, 35(3), pp. 50–55.