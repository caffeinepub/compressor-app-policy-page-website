# Specification

## Summary
**Goal:** Publish/deploy the current Compressor policy website to the Internet Computer with clear repo-local instructions and production-safe routing for “/” and “/policy”.

**Planned changes:**
- Add repository-local deployment documentation (README section or new markdown file) describing prerequisites (DFX version expectations, starting dfx locally, and deploy authentication) and exact commands to build/deploy both the backend canister and the frontend assets canister for local and mainnet.
- Update frontend deployment/routing configuration so the deployed site correctly serves the app when users land directly on “/” and “/policy”, including refresh support on “/policy”, while keeping “/” redirecting to “/policy” in production.

**User-visible outcome:** The website can be deployed by following the documented steps, and the deployed URL reliably loads the policy page whether users visit “/” (redirects to “/policy”) or go directly to “/policy” (including on refresh).
